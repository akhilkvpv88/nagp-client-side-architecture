export const loadInsurance = async () => {
  if (sessionStorage.getItem("insuranceData")) {
    return JSON.parse(sessionStorage.getItem("insuranceData") ?? "[]");
  }

  const insuranceRequest = await fetch(
    "https://gist.githubusercontent.com/akhilkvpv88/d1593a4b2dfad532e89a100284e04ee3/raw/053052b09972c6d445da87df68b147faed89316d/insuranceData.json"
  );

  const insuranceData = await insuranceRequest.json();

  sessionStorage.setItem("insuranceData", JSON.stringify(insuranceData));

  return insuranceData;
};
