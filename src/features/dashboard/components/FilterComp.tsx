import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FilterComp = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Januari</SelectItem>
        <SelectItem value="dark">Febuari</SelectItem>
        <SelectItem value="system">Maret</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default FilterComp;
