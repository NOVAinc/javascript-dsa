import LinkedList from "../linked-list/linked-list.js";

export default class HashMap {
  loadFactor = 0.8;
  capacity = 16;
  prime = 31;
  buckets = new Array(this.capacity).fill(null);

  hash(key) {
    let hash = 0;
    for (let i in key) {
      hash += (key.charCodeAt(i) * i * this.prime) % this.capacity;
    }

    return hash % this.capacity;
  }

  set(key, value) {
    let index = this.hash(key);

    if (this.buckets[index] === null) {
      let list = new LinkedList();
      list.append([key, value]);
      this.buckets[index] = list;
    } else if (this.buckets[index].findKey(key) === false) {
      this.buckets[index].append([key, value]);
    } else {
      let bucketIndex = this.buckets[index].findKey(key);

      this.buckets[index].updateAt(bucketIndex, [key, value]);
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    let keyIndex = bucket.findKey(key);

    if (keyIndex === false) {
      return null;
    } else {
      let data = bucket.at(keyIndex).data;

      return data[1];
    }
  }

  has(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket === null) {
      return false;
    }
    return bucket.findKey(key) === false ? false : true;
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.buckets[index];

    if (bucket === null) {
      return false;
    } else if (this.has(key)) {
      let keyIndex = bucket.findKey(key);
      bucket.removeAt(keyIndex);
      return true;
    }
    return false;
  }
}
