import api, { ResponseI } from "../../api";
import { EditProfilData } from "../../types";

interface IProfilService {
  editProfilService: (newProfilData: EditProfilData) => Promise<ResponseI>;
}

class ProfilService implements IProfilService {
  public editProfilService(newProfilData: EditProfilData): Promise<ResponseI> {
    return api.post("/user/editProfil", newProfilData);
  }
}

const profilService: IProfilService = new ProfilService();

export default profilService;
export type { IProfilService };
