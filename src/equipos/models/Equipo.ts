export interface postEquipo{
    nombre: string,
    escudo: string,
    color: string,
}

export interface Equipo{
    id: number,
    nombre: string,
    escudo: string,
    contPejudicado: number,
    contBeneficiado: number,
    contPerjudicadoGlobal: number,
    conBeneficiadoGlobal: number,
    color: string,
}