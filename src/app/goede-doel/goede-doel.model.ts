export class GoedeDoel {
  Naam: string;
  Omschrijving: string;
  Link: string;
  ParticipantId: string;
  // Id?: string;

  constructor(
    public naam: string,
    public omschrijving: string,
    public link: string,
    public participantId: string
    ) {
  }
}
