import { StoredData } from "./types";

const simulateNetworkDelay = () =>
  new Promise((resolve) => setTimeout(resolve, 500));

export const postData = async (data: StoredData) => {
  await simulateNetworkDelay();

  localStorage.setItem("submission", JSON.stringify(data));
};

export const getPostedData = async (): Promise<StoredData> => {
  await simulateNetworkDelay();

  const submission = localStorage.getItem("submission");
  return JSON.parse(submission ?? "");
};
