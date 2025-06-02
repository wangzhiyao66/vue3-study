
// 生成一个getHomeData的方法，2秒后返回有一个promise的数组
export function getHomeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]);
    }, 3000);
  });
}
// 生成一个 getDatalist 的方法，2秒后返回有一个promise的表格数据，包含id, name, age, email，phonenumber, address 字段,共计20条数据
export function getDatalist() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [];
      for (let i = 0; i < 20; i++) {
        data.push({
          id: i + 1,
          name: `Name ${i + 1}`,
          age: Math.floor(Math.random() * 50) + 18,
          email: `email${i + 1}@example.com`,
          phonenumber: '138001' + (i + 1),
          address: `Address ${i + 1}`,
        });
      }
      resolve(data);
    }, 5000);
  });
}

export function getSearchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John', age: 25, email: 'john@example.com', phonenumber: '13800123456', address: 'Address 1', createdAt: '2023-04-01', updatedAt: '2023-04-01' });
    }, 5000);
  });
}