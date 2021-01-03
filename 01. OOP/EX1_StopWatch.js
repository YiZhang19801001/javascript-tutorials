function StopWatch() {
  this.duration = 0;
  let startTime = 0;
  let isStarted = false;
  this.start = function () {
    if (isStarted) throw new Error("Stopwatch has already started!");
    const date = new Date();
    isStarted = true;
    startTime = date.getTime();
  };
  this.stop = function () {
    if (!isStarted) throw new Error("Stopwatch has not started yet!");
    const date = new Date();
    isStarted = false;
    let endTime = date.getTime();
    this.duration = Number(
      (this.duration + (endTime - startTime) / 1000).toFixed(3)
    );
  };
  this.reset = function () {
    this.duration = 0;
  };
}
const sw = new StopWatch();
