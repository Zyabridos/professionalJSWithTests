export default () => {
  const progressBar = document.querySelector('progress');
  let progressBarValue = 0;
  setInterval(() => {
    if (progressBarValue !== 100) {
      progressBarValue += 1;
      progressBar.setAttribute('value', progressBarValue);
    }
  }, '1000');
};
