import { Loading } from '@/components/Loading';
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getDestinations } from '../axios';
import { DestinationType } from '../destinations.types';

export type DestinationListProps = {
  search?: string;
  activeCategory: number | null;
  activeTag: number | null;
};

export function DestinationList({
  search,
  activeCategory,
  activeTag,
}: DestinationListProps) {
  const [loading, setLoading] = useState(true);
  const [destinations, setDestinations] = useState<DestinationType[]>([]);

  useEffect(() => {
    getDestinations()
      .then((data) => {
        setLoading(false);
        setDestinations(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <View className="flex-wrap mx-4 flex-row justify-between pb-10">
      {loading && <Loading />}
    </View>
  );
}
