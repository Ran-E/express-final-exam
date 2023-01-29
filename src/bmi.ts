import { WeightUnits } from "./bmi";
/**
 * BMI Calculator
 */

export const BmiStatus = {
  Underweight: 0,
  HealthyWeight: 1,
  Overweight: 2,
  Obesity: 3,
};

export const WeightUnits = {
  KG: 0, // kilograms
  G: 1, // grams
  Pound: 2, // lbs
};

export const HeightUnits = {
  CM: 0, // centimeter
  M: 1, // meter
  In: 2, // inch
  Ft: 3, // feet
};

export interface BmiInput {
  weight: number;
  weightUnit: number;
  height: number;
  heightUnit: number;
}

export interface BmiOutput {
  bmi: number;
  status: number;
}

/**
 * Takes a BmiInput object and return BmiOutput response
 */
export default function bmi(input: BmiInput): BmiOutput {
  const weight = (document.getElementById("weight") as HTMLInputElement | null)?.value;
  const weightUnit = Number(document.getElementById("weightUnit") as HTMLInputElement | null);
  const height = number(
    document.getElementById("height") as HTMLInputElement | null
  );
  const heightUnit = document.getElementById(
    "heightUnit"
  ) as HTMLInputElement | null;

  if (Number(weight) < 18.5) {
    if Number(weightUnit ==)
  }

  bmi: number;
  status: number;

  // TODO: implement me
  return { status: 0, bmi: 0 };
}
