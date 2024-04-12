class features {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    // console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryCopy = { ...this.queryStr };
    const removeFields = ["keyword", "page", "limit"];
    
    // Remove unnecessary fields from the queryCopy object
    removeFields.forEach(field => delete queryCopy[field]);

    // Construct the MongoDB query string for filtering
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b/g, (match) => `$${match}`);

    // Parse the constructed query string and apply filtering to the current query
    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  pagination(resultperpage) {
    const currentpage = Number(this.queryStr.page) || 1;
    const skip = resultperpage * (currentpage - 1);
    this.query = this.query.limit(resultperpage).skip(skip);
    return this;
  }

  // onlycategory(){
  //   const category = this.query.distinct("category");
  // }
}

export default features;
