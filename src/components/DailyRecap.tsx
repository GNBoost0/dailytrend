import { getAllRecaps } from '@/lib/recaps';
import DailyRecapClient from '@/components/DailyRecapClient';

export default function DailyRecap() {
  const recaps = getAllRecaps();
  if (!recaps || recaps.length === 0) return null;
  return <DailyRecapClient recaps={recaps} />;
}
