// useUserTasks.ts
import { useEffect, useState } from 'react';
import { filterByUserTasks } from '@/utils/supabase/models/filterByUserTasks';

type UserTasks = {
  taskShortList: string[];
  taskMonth: number[][];
  checkedList: boolean[];
  vegNames: string[];
};

export const useUserTasks = (month: string) => {
  const [userTasks, setUserTasks] = useState<UserTasks | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedTasks = await filterByUserTasks();
        setUserTasks(fetchedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [month]);

  if (loading) {
    throw new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating loading delay
  }

  return userTasks;
};
