import React from "react";
// import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from "../../hooks/useFileDownloader";
// import ExternalInfo from "components/ExternalInfo";

const files = [
 
  {
    name: "Photo 2",
    thumb:
      "https://00f74ba44bfcf3b4919c08e1d95cf29645e6ff1c59-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0001.jpeg?jk=AFshE3WZqz0xlJxeeXGcx5Korpvj26qV6RrFdE3ui-E3_PCxPZG3vOGWxsNzUhRxzaL2EntTlaNV6ri5WzOHECAD-SQEfttF4MGINS3Fcxl83IPdiAa7BvMgymeyJuQ8-9fdOOPkND7vhm5Yfm0jAm8E3hGa2Q51Djx903TIjiTXUF_48Ow2RSqTj7SFQgBPFy87Man9WDy2Pndvn21n83Db4EieaRcAZ2DgSsl_pD8XP6q_nZ2dZjBVIkm5FCwSDXVlZ5J2eAiAJKkEsQKoMmNm3Dq6hFVQR9I16fg2ehZedqSbv17S76zt8nTssEqNzZQhFHSrAapUFXL5nMG7bnUvC5YjubDmmdC27AnnxVW-dJ--BMSJc7G34GqAMJxehTtmQ2QTbLixBpAvihSLVX0XV7-rbOV83dgTF_rodLhWDSBseyAGBGQY80hmFGHjWW5KvIbKE35SfuemeYtkfIpenbWNb-RFkimSxpn_imJJRnA8DDckptZgMpkuHhmvIdBcjIzg9J8YIz-Bv4RxKYL54FMv_biwLk9mdVj5z3gFpwO7V5hrtapTfl3jZqZvckGPZFWcE9tHVCB_7GfrS14LTn3XNuN-TtkdqW0N8N1gOPT0bFMUjx94L9pdPw3StPandGmaAQEoEji4h66D0rPMJWSAOxXhBJ5Ac-IVpWZbruhmwz3bk4X_k7bhPmu5jeaaRDCf_NyCkNX-UiuHZLWK4ltY48GlWbC9TRX6MOOuvtq5RHxUCjlKlaqp8TX5SVxHTAgrMWGE4JcIKdDmdLLIp3Qkzqom7iLuO_5P7myIS8j8XshkTeRPDxvsrQ8jF3n7FcqVuUfpnRYEA6fYc00Izy2h_C52T1vOUlHY5YVBbal7JGasxhtDwX1DP4mLmOB6GuTmy-aiJSVeQRtZfpdZqYov2IZMkqA9zgJmyL3KbZ2APNGbWDZgvy6Luc4cANtfQxT5pwi5pP2jL3DPz9zzD6q07Sj7ikOf0O5xJlClyZHa&isca=1",
    file:
      "https://00f74ba44bfcf3b4919c08e1d95cf29645e6ff1c59-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0001.jpeg?jk=AFshE3WZqz0xlJxeeXGcx5Korpvj26qV6RrFdE3ui-E3_PCxPZG3vOGWxsNzUhRxzaL2EntTlaNV6ri5WzOHECAD-SQEfttF4MGINS3Fcxl83IPdiAa7BvMgymeyJuQ8-9fdOOPkND7vhm5Yfm0jAm8E3hGa2Q51Djx903TIjiTXUF_48Ow2RSqTj7SFQgBPFy87Man9WDy2Pndvn21n83Db4EieaRcAZ2DgSsl_pD8XP6q_nZ2dZjBVIkm5FCwSDXVlZ5J2eAiAJKkEsQKoMmNm3Dq6hFVQR9I16fg2ehZedqSbv17S76zt8nTssEqNzZQhFHSrAapUFXL5nMG7bnUvC5YjubDmmdC27AnnxVW-dJ--BMSJc7G34GqAMJxehTtmQ2QTbLixBpAvihSLVX0XV7-rbOV83dgTF_rodLhWDSBseyAGBGQY80hmFGHjWW5KvIbKE35SfuemeYtkfIpenbWNb-RFkimSxpn_imJJRnA8DDckptZgMpkuHhmvIdBcjIzg9J8YIz-Bv4RxKYL54FMv_biwLk9mdVj5z3gFpwO7V5hrtapTfl3jZqZvckGPZFWcE9tHVCB_7GfrS14LTn3XNuN-TtkdqW0N8N1gOPT0bFMUjx94L9pdPw3StPandGmaAQEoEji4h66D0rPMJWSAOxXhBJ5Ac-IVpWZbruhmwz3bk4X_k7bhPmu5jeaaRDCf_NyCkNX-UiuHZLWK4ltY48GlWbC9TRX6MOOuvtq5RHxUCjlKlaqp8TX5SVxHTAgrMWGE4JcIKdDmdLLIp3Qkzqom7iLuO_5P7myIS8j8XshkTeRPDxvsrQ8jF3n7FcqVuUfpnRYEA6fYc00Izy2h_C52T1vOUlHY5YVBbal7JGasxhtDwX1DP4mLmOB6GuTmy-aiJSVeQRtZfpdZqYov2IZMkqA9zgJmyL3KbZ2APNGbWDZgvy6Luc4cANtfQxT5pwi5pP2jL3DPz9zzD6q07Sj7ikOf0O5xJlClyZHa&isca=1" +
      Math.random(),
    filename: "resume-2.jpg",
  }, {
    name: "Photo 1",
    thumb:
      "https://00f74ba44be4f3104f743aab27f5b6511eea598a8b-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0002.jpeg?jk=AFshE3U-GfjeadmAlmse_1hqBTkc2dNJCIwh4wFKfJKI5b4Zo1Sa9f0eqzBxQmekU8P6sRuy0i3cFSkGCrDBpdOM6qfup_hUfp2dwIf5ZpP_ucBsha4-lOkbjUBaotWxe3wkrHMaeY1Xr-8qjP06Dbmsw_YTF4bvWoB05rLRFwsw1EfEBETirBi1Wuo1Z4JTRmM1w8CYuEf4ZQtAcZ37cxWY9nIhER_guaSvEvtyOXHaKABJ9KoNR-pkakYRFAJim__h5x60JeTtFFmwrtKa0m_7nF9yEuGDQXc6-BQAtcBBxUKSeJh45ovQU7iqAeIngJuSTWRoCb_4l6xrCZqmaGkQ5bbYTjHwpioausxqHwe1i-OdopCXCK7kOOPC46G-P7Z-HA1FIq9zlFXoG8laFXaFl-IXx38tHJtoZhqQ-cuMNkMPR6tT1Q34UdTkSVWa2SvaOL31Q7d0oIQg7HlNlnyvuMkI2bcNf1u6P21p-1DVLxENdsJ-KASLtkxrqw1vJr29wik_nqsWJPihbaUAoWQt1ZKsc8rVAV08zZpF-QhHWNBIU9aLDQZPJ0Am5n4iFNFvUJL8ZxwmF3PQlNYRXu7dBiEEHtQQJKfdNyZ1fnvtccnxw-dCTOghmB6AxM_rX5lRiDzXUde5hgy2leipQzkT0h5kjHDb8pHQFQ7XumDXVwutiiwZxbuhL1NRnnY3YC02ebUsTQyxgO2ahx46yXPNe7tLhVfNf9HkOwV8APikfAxEDgh3cpRBvhRfopckH2esf15auZmluYrkjXD_WHmF9bhOlElA70LwTJKVrZOMA_EuWg5AT44SG7FjDv5WJwjz2mJGVESUMJypVvtYnFDZ-5mF9WnT-Yc5tA5HksZlrd0z2rmZRpPRSXfxo3yG86KwjbkGQFQ7XQO0MYjgWr3xHXLMQlFEIaD3DFfmiEfmTWDbHNeE-TX7q8THUFG3QoqSdNBrpHs4rcXbDsEIpHSqlp65KBsgSI4Q5WIvYJ7oOkrk&isca=1",
    file:
      "https://00f74ba44be4f3104f743aab27f5b6511eea598a8b-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0002.jpeg?jk=AFshE3U-GfjeadmAlmse_1hqBTkc2dNJCIwh4wFKfJKI5b4Zo1Sa9f0eqzBxQmekU8P6sRuy0i3cFSkGCrDBpdOM6qfup_hUfp2dwIf5ZpP_ucBsha4-lOkbjUBaotWxe3wkrHMaeY1Xr-8qjP06Dbmsw_YTF4bvWoB05rLRFwsw1EfEBETirBi1Wuo1Z4JTRmM1w8CYuEf4ZQtAcZ37cxWY9nIhER_guaSvEvtyOXHaKABJ9KoNR-pkakYRFAJim__h5x60JeTtFFmwrtKa0m_7nF9yEuGDQXc6-BQAtcBBxUKSeJh45ovQU7iqAeIngJuSTWRoCb_4l6xrCZqmaGkQ5bbYTjHwpioausxqHwe1i-OdopCXCK7kOOPC46G-P7Z-HA1FIq9zlFXoG8laFXaFl-IXx38tHJtoZhqQ-cuMNkMPR6tT1Q34UdTkSVWa2SvaOL31Q7d0oIQg7HlNlnyvuMkI2bcNf1u6P21p-1DVLxENdsJ-KASLtkxrqw1vJr29wik_nqsWJPihbaUAoWQt1ZKsc8rVAV08zZpF-QhHWNBIU9aLDQZPJ0Am5n4iFNFvUJL8ZxwmF3PQlNYRXu7dBiEEHtQQJKfdNyZ1fnvtccnxw-dCTOghmB6AxM_rX5lRiDzXUde5hgy2leipQzkT0h5kjHDb8pHQFQ7XumDXVwutiiwZxbuhL1NRnnY3YC02ebUsTQyxgO2ahx46yXPNe7tLhVfNf9HkOwV8APikfAxEDgh3cpRBvhRfopckH2esf15auZmluYrkjXD_WHmF9bhOlElA70LwTJKVrZOMA_EuWg5AT44SG7FjDv5WJwjz2mJGVESUMJypVvtYnFDZ-5mF9WnT-Yc5tA5HksZlrd0z2rmZRpPRSXfxo3yG86KwjbkGQFQ7XQO0MYjgWr3xHXLMQlFEIaD3DFfmiEfmTWDbHNeE-TX7q8THUFG3QoqSdNBrpHs4rcXbDsEIpHSqlp65KBsgSI4Q5WIvYJ7oOkrk&isca=1" +
      Math.random(),
    filename: "resume-1.jpg",
  },
];

const FileDownloader = () => {
  const [downloadFile, downloaderComponentUI] = useFileDownloader();

  const download = (file) => downloadFile(file);

  return (
    <>

      {/* <Header title="File downloader with progress bar" />

      <ExternalInfo page="fileDownloader" /> */}

      <div className="row">
        <div className="col text-center">
          <h2>Download Resume in JPEG</h2>
          <div className="row mt-3">
            {files.map((file, idx) => (
              <div className="col" key={idx}>
                <div className="card ">
                  <div className="card-body" key={idx}>
                    <img className="card-img-top mb-3" src={file.thumb} />
                    <h5 className="card-title">{file.name}</h5>

                    <a
                      className="btn btn-primary cursor-pointer text-white"
                      onClick={() => download(file)}
                    >
                      Download <FontAwesomeIcon icon="download" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {downloaderComponentUI}
      </div>
    </>
  );
};

export default FileDownloader;
