import {Sponsor} from '../sponsor/sponsor.model';

export class Participant {
  voornaam: string;
  achternaam: string;
  omschrijving?: string;
  goedDoelNaam?: string;
  goedDoelOmschrijving?: string;
  goedDoelLink?: string;
  sponsors?: Sponsor[];
  id?: string;

  constructor(
    public Voornaam: string,
    public Achternaam: string,
    public Omschrijving: string,
    public GoedDoelNaam: string,
    public GoedDoelOmschrijving: string,
    public GoedDoelLink: string
  ) {
  }

}
