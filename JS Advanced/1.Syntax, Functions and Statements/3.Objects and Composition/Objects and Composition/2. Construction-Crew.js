function solve(worker){
    if (worker.dizziness == true) {
        worker.levelOfHydrated = worker.levelOfHydrated + (worker.weight * worker.experience * 0.1);
        worker.dizziness = false;
    }
    return worker;
}
console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }));
