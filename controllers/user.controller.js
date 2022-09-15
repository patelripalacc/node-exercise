import { join } from "path";
import fs from "fs/promises";

const usersFilePath = join(__dirname, "../data/users.json");

export const findAll = async () => {
  let data = await fs.readFile(usersFilePath);
  return JSON.parse(data.toString());
};

export const findOne = async (id) => {
  // todo
};

export const addOne = async (user) => {
  // todo
};

export const updateOne = async (id, user) => {
  // todo
};

export const removeOne = async (id) => {
  // todo
};
