// DATOS PRIMITIVOS --------------------
let interMiammi: number = 11;
let fcDallas: number = 11;
let messi: number = 1;
let juegaMessi: boolean = true;

function jugar(equipo1: number, equipo2: number, juegaMessi: boolean) {
    let motivo: string = ""
    if (juegaMessi) {
        equipo1 += messi;
        motivo = " porque juega Messi"
    }
    if (equipo1 > equipo2) console.log(`Gana Inter Miami ${motivo}`);
    if (equipo1 == equipo2) console.log(`Empate`);
    if (equipo1 < equipo2) console.log(`Gana FC Dallas`);

}