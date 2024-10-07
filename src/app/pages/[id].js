"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function TaskDetails() {
  const router = useRouter();
  const { id } = router.query; 
  const [taskId, setTaskId] = useState(null);
  console.log(id,taskId);
  

  useEffect(() => {
    if (router.isReady && id) {
      setTaskId(id);
    }
  }, [router.isReady, id]);
  

  if (!taskId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Details</h1>
      <p>Task ID: {taskId}</p>
     
    </div>
  );
}
