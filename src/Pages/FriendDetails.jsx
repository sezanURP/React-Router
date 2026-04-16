import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const FriendDetails = () => {
   const friendData= useLoaderData()
   const {id}= useParams()
   return (
      <div>
         
      </div>
   );
};

export default FriendDetails;