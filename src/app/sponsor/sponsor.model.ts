export class Sponsor {
  achternaam: string;
  voornaam: string;
  boodschap?: string;
  bedrag: number;
  participantId: string;
  id?: string;

  constructor(
    private Achternaam: string,
    private Voornaam: string,
    private Boodschap: string,
    private Bedrag: number,
    public ParticipantId: string
  ) {
  }
}
