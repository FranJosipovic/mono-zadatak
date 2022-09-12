import { makeAutoObservable, runInAction } from "mobx";
import { getCarMakes, createCarMake, deleteCarMake } from "../api/carRoutes";

export class CarMakeStore {
  carMakeList = [];

  constructor() {
    makeAutoObservable(this);
    this.loadMakes();
  }

  loadMakes() {
    getCarMakes().then((data) => {
      runInAction(() => {
        this.carMakeList = data.item;
      });
    });
  }

  getMake(id) {
    const object = this.carMakeList.find((carMake) => carMake.id === id);
    if (!object) {
      return { makeName: "deleted", makeId: "deleted" };
    }
    return { makeName: object.name, makeId: object.id };
  }

  createCarMake(name, abrv) {
    createCarMake(name, abrv, []).then((data) => {
      runInAction(() => {
        this.carMakeList.push(data);
      });
    });
  }

  deleteCarMake(id) {
    deleteCarMake(id).then((data) => {
      runInAction(() => {
        if (data.ok) {
          this.carMakeList = this.carMakeList.filter(
            (carMake) => carMake.id !== id
          );
        }
      });
    });
  }
}
