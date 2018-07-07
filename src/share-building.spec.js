const compute = require("./share-building.js");

describe("share-building spec", () => {
  it("check compute logic 1", () => {
    const output = compute(["1.5", "3", "6", "1.5"]);
    const desired = ["12.500", "25.000", "50.000", "12.500"];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("check compute logic 2", () => {
    const output = compute(["1"]);
    const desired = ["100.000"];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("check compute logic 3", () => {
    const output = compute([`${Number.MAX_VALUE}`]);
    const desired = ["100.000"];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("check compute logic 4", () => {
    const output = compute(["0", `${Number.MAX_VALUE}`]);
    const desired = ["0.000", "100.000"];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("check compute logic 5", () => {
    const output = compute(["0"]);
    const desired = ["0.000"];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("check compute logic 6", () => {
    const output = compute(["0", "0"]);
    const desired = ["0.000", "0.000"];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("check compute logic 7", () => {
    const output = compute(["0.0000000000000001"]);
    const desired = ["100.000"];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("empty array test", () => {
    const output = compute([]);
    const desired = [];
    expect(output).toEqual(expect.arrayContaining(desired));
  });

  it("null array an exception test", () => {
    const task = () => compute(null);
    expect(task).toThrowError(/^Not support nullable array$/);
    expect(task).toThrowError(Error);
  });

  it("sum overflowing an exception test", () => {
    const task = () => compute([`${Number.MAX_VALUE}`, `${Number.MAX_VALUE}`]);
    expect(task).toThrowError(/^Sum overflowing$/);
    expect(task).toThrowError(Error);
  });

  it("array max length an exception test", () => {
    const task = () => compute({ length: 7e6 + 1 });
    expect(task).toThrowError(/^Array length can't greater than 7000000$/);
    expect(task).toThrowError(Error);
  });
});
