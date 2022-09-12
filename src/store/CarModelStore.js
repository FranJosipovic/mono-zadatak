import { makeAutoObservable, runInAction } from "mobx";
import {
  getCarModels,
  createCarModel,
  updateCarMake,
  deleteCarModel,
  updateCarModel,
} from "../api/carRoutes";

export class CarModelStore {
  cars = [];
  totalRecords = 1;
  recordsPerPage = 1;
  page = 1;
  query = null;
  rpp = 7;
  sort = "name|asc";
  constructor(cars) {
    makeAutoObservable(this);
    this.cars = cars;
  }

  loadCars() {
    getCarModels(this.query, this.currentPage, this.rpp, this.sort).then(
      (data) => {
        runInAction(() => {
          this.cars = data.item;
          this.recordsPerPage = data.recordsPerPage;
          this.totalRecords = data.totalRecords;
        });
      }
    );
  }

  createCarModel(name, abrv, carMakeId) {
    createCarModel(name, abrv, carMakeId).then((data) => {
      runInAction(() => {
        updateCarMake(carMakeId, data);
      });
    });
  }

  updateCarModel(id, newName, newAbrv, newCarMakeId) {
    updateCarModel(id, newName, newAbrv, newCarMakeId).then((data) => {
      runInAction(() => {
        const indexOfUpdated = this.cars.findIndex((car) => car.id === id);
        this.cars[indexOfUpdated].name = newName;
        this.cars[indexOfUpdated].abrv = newAbrv;
        this.cars[indexOfUpdated].carMakeId = newCarMakeId;
      });
    });
  }

  deleteCarModel(id) {
    deleteCarModel(id).then((data) => {
      runInAction(() => {
        if (data.ok) {
          this.cars = this.cars.filter((car) => car.id !== id);
        }
      });
    });
  }

  get pageCount() {
    return Math.ceil(this.totalRecords / this.recordsPerPage);
  }
  set currentPage(page) {
    this.page = page;
  }
  get currentPage() {
    return this.page;
  }

  set searchQuery(query) {
    this.query = query;
  }

  get searchQuery() {
    return this.query;
  }

  set sortValue(sort) {
    this.sort = sort;
  }

  get sortValue() {
    return this.sort;
  }
}
