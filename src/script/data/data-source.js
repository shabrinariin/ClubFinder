import clubs from "./clubs.js";

class DataSource{
static searchClub(keyword) {
  return new Promise((resolve,reject)=>{
    const filteredClubs = clubs.filter(club => club.name.toUpperCase().includes(keyword.toUpperCase()));

    if (filteredClubs.length) {
        this.onSuccess(filteredClubs);
    } else {
        this.onFailed(`${keyword} is not found"`);
    }
    });
  }
}

export default DataSource;
