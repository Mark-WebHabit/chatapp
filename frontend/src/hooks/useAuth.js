import React, { useEffect, useState } from "react";
import { getAuthUser } from "../features/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

const useAuth = () => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data asynchronously
    const fetchUser = async () => {
      try {
        await dispatch(getAuthUser());
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchUser();
  }, [dispatch]);

  return [user, loading];
};

export default useAuth;
