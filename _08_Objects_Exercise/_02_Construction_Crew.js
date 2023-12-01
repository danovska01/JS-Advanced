function workerConstruct(workerObj) {
  if (workerObj.dizziness) {
    const requiredWater = 0.1 * workerObj.weight * workerObj.experience;

    // Add the required amount to the existing levelOfHydrated
    workerObj.levelOfHydrated += requiredWater;
    workerObj.dizziness = false;
  }

  console.log(workerObj);
}

workerConstruct({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});

workerConstruct({
  weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true,
});

workerConstruct({
  weight: 95,
  experience: 3,
  levelOfHydrated: 0,
  dizziness: false,
});
