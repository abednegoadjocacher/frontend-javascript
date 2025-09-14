// Define the MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // unique brand
}

// Define the MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // unique brand
}

// Function to sum MajorCredits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Function to sum MinorCredits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}
