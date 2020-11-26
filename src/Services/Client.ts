import ClientInfo from "../Interfaces/ClientInfo";
class ClientService {
    public constructor() {}
    public processTypeTwo = (input: string): ClientInfo => {
        const response = input.split("0").filter((e: string): string => e);
        return {
            firstName: response[0],
            lastName: response[1],
            clientId: this.splitnumber(response[2]),
        };
    };
    public processTypeOne = (input: string): ClientInfo => {
        return {
            firstName: input.substring(0, 8),
            lastName: input.substring(8, 18),
            clientId: input.substring(18, 26),
        };
    };
    public splitnumber = (input): string => {
        return input.toString().replace(/\B(?=(\d{4})+(?!\d))/g, "-");
    };
}

export default ClientService;
