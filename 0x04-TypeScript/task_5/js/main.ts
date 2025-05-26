// Define MajorCredits interface with a unique brand
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

// Define MinorCredits interface with a unique brand
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  };
}
