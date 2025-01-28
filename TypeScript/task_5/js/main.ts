interface MajorCredits {
  credits: number;
  readonly brand: "Major";
}

interface MinorCredits {
  credits: number;
  readonly brand: "Minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor"
  };
}

// task10
// const major1: MajorCredits = { credits: 30, brand: "Major" };
// const major2: MajorCredits = { credits: 20, brand: "Major" };

// const minor1: MinorCredits = { credits: 10, brand: "Minor" };
// const minor2: MinorCredits = { credits: 5, brand: "Minor" };

// console.log("Total Major Credits:", sumMajorCredits(major1, major2));
// console.log("Total Minor Credits:", sumMinorCredits(minor1, minor2));