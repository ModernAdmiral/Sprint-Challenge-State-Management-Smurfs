import React from "react";
import { useSelector } from "react-redux";
import SmurfCard from "./SmurfCard";

const SmurfList = () => {
  const data = useSelector(state => state.data);
  const isFetching = useSelector(state => state.isFetching);
  const error = useSelector(state => state.error);

  return (
    <div>
      {data.map(e => {
        return <SmurfCard key={e.id} smurf={e} />;
      })}
      {isFetching && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default SmurfList;
