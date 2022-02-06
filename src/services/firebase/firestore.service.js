import { db } from "./firebase.config";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

//Refs
const REFS = {
  inventory: collection(db, "Inventory"),
  movements: collection(db, "Movements"),
  warehouse: collection(db, "Warehouse"),
  settings: collection(db, "Settings"),
};

//Query options
const QUERYS = {
  limit: (x) => limit(...x),
  where: (loc) => where(...loc),
  order: (x) => orderBy(...x),
};

//Query Builder
const queryBuilder = (_query) => {
  let finalQuery = [];
  for (let key in _query) {
    if (!QUERYS[key]) return;
    finalQuery = [...finalQuery, QUERYS[key](_query[key])];
  }
  return finalQuery;
};

//GET ALL
export const getAll = async (ref) => {
  const snap = await getDocs(REFS[ref]);
  const docs = await snap.docs.map((doc) => doc.data());

  return docs;
};

//Get BY ...
export const getByQuery = async (ref, querys) => {
  const q = query(REFS[ref], ...queryBuilder(querys));
  const snap = await getDocs(q);
  const docs = await snap.docs.map((doc) => doc.data());
  return docs;
};

