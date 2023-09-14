class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    if (pageIndex < this.pageCount() - 1 && pageIndex >= 0) {
      return this.itemsPerPage;
    } else if (pageIndex == this.pageCount() - 1) {
      let result = this.itemCount() % this.itemsPerPage;
      if (result === 0) {
        return this.itemsPerPage;
      } else {
        return result;
      }
    } else {
      return -1;
    }
  }

  pageIndex(itemIndex) {
    console.log(this.collection, this.itemsPerPage);
    if (itemIndex > this.itemCount() - 1 || itemIndex < 0) return -1;
    return Math.floor(itemIndex / this.itemsPerPage);
  }
}
