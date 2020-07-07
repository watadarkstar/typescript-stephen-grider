import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const nums = new NumbersCollection([50, 3, -5, 0]);
nums.sort();
console.log(nums.data);

const chars = new CharactersCollection("cdA");
chars.sort();
console.log(chars.data);

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.sort();
list.print();
