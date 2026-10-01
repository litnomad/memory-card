export const initialData = [
  {
    id: 1,
    term: "moon",
    img: () => {
      const data = "moon";
      let fetchResult;

      fetch(
        `https://api.giphy.com/v1/gifs/random/api_key=KH2vrIo53DTpqDgTI371yMGIFgZRVvSu/tag=${data}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        fetchResult = response.json();
      });

      console.log(fetchResult);
      return fetchResult;
    },
    hasClicked: false,
  },
  {
    id: 2,
    term: "sun",
    img: () => {
      const data = "sun";
      let fetchResult;

      fetch(
        `https://api.giphy.com/v1/gifs/random/api_key=KH2vrIo53DTpqDgTI371yMGIFgZRVvSu/tag=${data}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        fetchResult = response.json();
      });

      console.log(fetchResult);
      return fetchResult;
    },
    hasClicked: false,
  },
  {
    id: 3,
    term: "star",
    img: () => {
      const data = "star";
      let fetchResult;

      fetch(
        `https://api.giphy.com/v1/gifs/random/api_key=KH2vrIo53DTpqDgTI371yMGIFgZRVvSu/tag=${data}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        fetchResult = response.json();
      });

      console.log(fetchResult);
      return fetchResult;
    },
    hasClicked: false,
  },
  {
    id: 4,
    term: "devil",
    img: () => {
      const data = "devil";
      let fetchResult;

      fetch(
        `https://api.giphy.com/v1/gifs/random/api_key=KH2vrIo53DTpqDgTI371yMGIFgZRVvSu/tag=${data}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        fetchResult = response.json();
      });

      console.log(fetchResult);
      return fetchResult;
    },
    hasClicked: false,
  },
  {
    id: 5,
    term: "world",
    img: () => {
      const data = "world";
      let fetchResult;

      fetch(
        `https://api.giphy.com/v1/gifs/random/api_key=KH2vrIo53DTpqDgTI371yMGIFgZRVvSu/tag=${data}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        fetchResult = response.json();
      });

      console.log(fetchResult);
      return fetchResult;
    },
    hasClicked: false,
  },
  {
    id: 6,
    term: "fool",
    img: () => {
      const data = "fool";
      let fetchResult;

      fetch(
        `https://api.giphy.com/v1/gifs/random/api_key=KH2vrIo53DTpqDgTI371yMGIFgZRVvSu/tag=${data}`,
      ).then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        fetchResult = response.json();
      });

      console.log(fetchResult);
      return fetchResult;
    },
    hasClicked: false,
  },
];
