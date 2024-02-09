// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test("Object keys match values", () => {
    expect(launchcode.organization).toBe("nonprofit");
    expect(launchcode.executiveDirector).toBe("Jeff");
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("Check if array containsWeb Web Development, Data Analysis, Liftoff", () => {
    expect(launchcode.programsOffered.includes("Web Development")).toBe(true);
    expect(launchcode.programsOffered.includes("Data Analysis")).toBe(true);
    expect(launchcode.programsOffered.includes("Liftoff")).toBe(true);
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("When passed a number that is ONLY divisible by 2 return 'Launch!'", () => {
    expect(launchcode.launchOutput(2)).toBe("Launch!")
  });

  test("When passed a number that is ONLY divisible by 3, return 'Code!'", () => {
    expect(launchcode.launchOutput(3)).toBe("Code!")
  });

  test("When passed a number that is ONLY divisible by 5, return 'Rocks!'", () => {
    expect(launchcode.launchOutput(5)).toBe("Rocks!")
  });

  test("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!")
  });
  
  test("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", () => {
    expect(launchcode.launchOutput(6)).toBe("LaunchCode!")
  });
  
  
});