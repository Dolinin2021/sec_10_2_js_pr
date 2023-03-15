import read from './reader';
import json from './parser';
import GameSaving from './saving';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const value = await json(data);
    const res = JSON.parse(value);
    const instance = new GameSaving(res.id, res.created, res.userInfo);
    return instance;
  }
}
