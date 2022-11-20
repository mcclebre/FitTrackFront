import { useResolvedPath } from "react-router-dom";

const BASE_URL = "https://fitnesstrac-kr.herokuapp.com";

export const SignUpUser = async (username, password) => {
  console.log("im getting this far");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  const response = await fetch(`${BASE_URL}/api/users/register`, options);
  const result = await response.json();

  if (result.error) {
    alert("Account is already registered. Please log in");
  }

  return result;
};

export async function getRoutines() {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${BASE_URL}/api/routines`, options);
  const result = await response.json();
  const routines = result;

  return routines;
}

export const LoginUser = async (username, password) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  const response = await fetch(`${BASE_URL}/api/users/login`, options);
  const result = await response.json();

  if (result.error) console.log("Username not found. Please sign up!");

  return result;
};

export const currentUserInfo = async (token) => {
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const response = await fetch(`${BASE_URL}/api/users/me`, options);
  const result = await response.json();

  return result;
};

export const fetchActivities = async () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(`${BASE_URL}/api/activities`, options);
  const result = await response.json();

  return result;
};

export const newActivity = async (name, description) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      description,
    }),
  };
  console.log("name", name);
  console.log("description", description);

  const response = await fetch(`${BASE_URL}/api/activities`, options);
  const result = await response.json();
  console.log(result, "result");

  if (result.error) console.log("Error posting");

  return result;
};

export const editActivity = async (activityId, name, description) => {
  const options = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      description,
    }),
  };

  const response = await fetch(
    `${BASE_URL}/api/activities/${activityId}`,
    options
  );
  const result = await response.json();

  if (result.error) {
    console.log("Error editing Activity");
  }

  return result;
};

export const newRoutine = async (name, goal) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({
      name,
      goal,
    }),
  };
  console.log("name", name);
  console.log("goal", goal);

  const response = await fetch(
    "https://fitnesstrac-kr.herokuapp.com/api/routines",
    options
  );
  const result = await response.json();
  console.log(result, "result");

  if (result.error) console.log("Error posting new routine");

  return result;
};
