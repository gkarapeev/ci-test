const TestClass = require('./index');

test('testMethod works as expected', () => {
    const testInstance = new TestClass();
    const testResult = testInstance.testMethod(4, 3);
    expect(testResult).toBe(4 + 3);
});