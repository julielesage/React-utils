import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "./useFetch";

const stubbedCountries = [
  { name: "Slovakia", capital: "Bratislava" },
  { name: "Germany", capital: "Berlin" },
];
const stubbedFetchUrl = "api/countriesUrl-mocked";

// to prevent tests to affect each other:
afterEach(() => {
  global.fetch.mockClear();
});

afterAll(() => {
  global.fetch.mockRestore();
});

describe("useFetch", () => {

  it("should return data after fetch", async () => {
    // Mock API
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(stubbedCountries),
      })
    );

    // Execute
    // renderHook is useFul foor hooks because hook can only be in React component...
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(stubbedFetchUrl, { current: true }, [])
    );
    // waitForNextUpdate() which returns a Promise that resolves the next time the hook renders, commonly when a state is updated as the result of an asynchronous update.
    await waitForNextUpdate();

    // Assert
    expect(result.current).toStrictEqual({
      loading: false,
      data: stubbedCountries,
      error: null,
    });
  });

  it("should catch error", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.reject("oops, error occured!"),
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(stubbedFetchUrl, { current: true }, [])
    );

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      loading: false,
      data: [],
      error: "oops, error occured!",
    });
  });

  it("should not fetch data if current reference is falsy", async () => {
    const { result } = renderHook(() =>
      useFetch(stubbedFetchUrl, { current: false }, [])
    );

    expect(global.fetch).not.toHaveBeenCalled();
    expect(result.current).toStrictEqual({
      loading: true,
      data: [],
      error: null,
    });
  });
});