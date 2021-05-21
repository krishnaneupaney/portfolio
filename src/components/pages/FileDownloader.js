import React from "react";
// import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFileDownloader from "../../hooks/useFileDownloader";
// import ExternalInfo from "components/ExternalInfo";

const files = [
 
  {
    name: "Resume 1",
    thumb:
      "https://00f74ba44b773e85e97430b57988cc1e70dfb65c83-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0001.jpeg?jk=AFshE3VU-URIEboSr8FknFIU5AGo0OukKa9pUJCfeB8bGQF-hwDgTUo-dakiTV4QWgwWt2M2n8Se2tcM2CEdzydTxCIaWpioSTPboeCbFhrInnuvQmobzjZtinb3y8kEDKp8pWN1mEIf3mSG7rUNiGGV1j84C8IyG8h0t3qJOmHWE_jljNmIBRXl3pIqaZfjBPlH-AKAMMI5Ouvvqc4bElP1nXDiyozX8wvd4pPNf31JVPOw1v1IlmCe08iU7JO3hoZaG51uybr7c8K3X1kFwxN36lX2E9iKljK6ygs77SonFhRFx3flyFJiWTjdsYp1nXC4mmpaUxE9hoZ3a3hf-43ZD7qoRXeEK494nxWDi3SSRyodINxI7lHel1x0M8uG4UsqBd2Pnpa1F4ratGXTTluEMpZig06uOwxOS8qoj_Tb1tDxs8RVN9JspA-2AlqegIJj60lLOpppu4DOmAckfrFTaK7CxMjP6ijk6VsqBhmmiOrGFcGW-D8gVa1avrfu0yPHa7i6G3SCScnNFtVmXFT14Jg3J-Lc-pomj8lmp1KWa_neaz_FRCjtojzWAEDN4QSW7nNBJ9V3sI3T4q0sGlWBGLsPGI9DTw97UCyI-B_JlOABoz5gcGZ_Om3cWKEvwqotOrACvBT708yu6vF8SnrtOwD5kL7YV8Qzacm-MTLzUJ_0jfpHBoq6KEgXcp-y9LROqt-706XeyAdOIt0mn1_XHigvMunXZ62zUTHBaoVCyp-55liBuA8a8DW3Ch_JPZhV3moTJk3MhkQX-gwVQcER_Gmc2Xiad9nt2FIbVaxorEZ4WYcJ6ZhUN1DgTydPUuJlmXOhastvvU8oFIc0CUsAiCDmXJdsfrlTJlwNhd2kC7Xo7P9xNGSgNJcpU24c_iteVszn9Qp28GtgDExuTDfFDOurtvh2tRlLMqd9tuTDpacHAxU3OZOYWbcNBOE-OB-gcx3K-Q2QiXzctdvxNnQNi09svsDF-N2JDlBHkVceWf_BNg&isca=1",
    file:
      "https://00f74ba44b773e85e97430b57988cc1e70dfb65c83-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0001.jpeg?jk=AFshE3VU-URIEboSr8FknFIU5AGo0OukKa9pUJCfeB8bGQF-hwDgTUo-dakiTV4QWgwWt2M2n8Se2tcM2CEdzydTxCIaWpioSTPboeCbFhrInnuvQmobzjZtinb3y8kEDKp8pWN1mEIf3mSG7rUNiGGV1j84C8IyG8h0t3qJOmHWE_jljNmIBRXl3pIqaZfjBPlH-AKAMMI5Ouvvqc4bElP1nXDiyozX8wvd4pPNf31JVPOw1v1IlmCe08iU7JO3hoZaG51uybr7c8K3X1kFwxN36lX2E9iKljK6ygs77SonFhRFx3flyFJiWTjdsYp1nXC4mmpaUxE9hoZ3a3hf-43ZD7qoRXeEK494nxWDi3SSRyodINxI7lHel1x0M8uG4UsqBd2Pnpa1F4ratGXTTluEMpZig06uOwxOS8qoj_Tb1tDxs8RVN9JspA-2AlqegIJj60lLOpppu4DOmAckfrFTaK7CxMjP6ijk6VsqBhmmiOrGFcGW-D8gVa1avrfu0yPHa7i6G3SCScnNFtVmXFT14Jg3J-Lc-pomj8lmp1KWa_neaz_FRCjtojzWAEDN4QSW7nNBJ9V3sI3T4q0sGlWBGLsPGI9DTw97UCyI-B_JlOABoz5gcGZ_Om3cWKEvwqotOrACvBT708yu6vF8SnrtOwD5kL7YV8Qzacm-MTLzUJ_0jfpHBoq6KEgXcp-y9LROqt-706XeyAdOIt0mn1_XHigvMunXZ62zUTHBaoVCyp-55liBuA8a8DW3Ch_JPZhV3moTJk3MhkQX-gwVQcER_Gmc2Xiad9nt2FIbVaxorEZ4WYcJ6ZhUN1DgTydPUuJlmXOhastvvU8oFIc0CUsAiCDmXJdsfrlTJlwNhd2kC7Xo7P9xNGSgNJcpU24c_iteVszn9Qp28GtgDExuTDfFDOurtvh2tRlLMqd9tuTDpacHAxU3OZOYWbcNBOE-OB-gcx3K-Q2QiXzctdvxNnQNi09svsDF-N2JDlBHkVceWf_BNg&isca=1" +
      Math.random(),
    filename: "resume-2.jpg",
  }, {
    name: "Resume 2",
    thumb:
      "https://00f74ba44b3b87421f124cdb7378bc477892137be0-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0002.jpeg?jk=AFshE3WTxBu1IUQYho5MvRN7Wg3XEQCtRnACHwcPCPswY0BiJYX83ZRHFRKC4PwKIR0HPoNyBONvNM8InWotsBMMx6H5pz-dpKBhT9NEtyKnAOcxtY6uX_CG1qsM7chJMcKvYdBt7HKZXW1SFCuCWUjK7E1K3Yolyk7XvtVY2moIuLZgf6EdyMjKJr3tdxVXpbgXP1AsI6-GWR4w1a6pDdP-i9TgCZNjGEWd9cVyvKB34EZTCmlU0mj6GeYsOKoBl0OZF3pq-rQQer4MFM8DfMoLYR5Dcz9IjDK5zmctojioLeCoBrKYnR_i5Rqa7Ps6wWBB7AxzX78bMK-qn7puMlJTbPanozM2Nnl5v24Gv3quSLyzD7agwYT9FONrakMqlxqDaKfZd5ydoVVuzcgm-Ri71BotZAycP7SEZQaluDCjXr0idUYrV8iOsUjzydMqW6wmQ3yaI06ZeHFwEtLF26B3vb5AQtPLU61h7yBBkh76JhkezE7qX9AJyoNde6SUf9hFamFu7fVtMwAfrEjtyRc78AZ746Otdc_HWyuTWv3JPEaDd99GhtLUnuIVOYJahkD5YdNkBxVEF3byJR2v6EMADQFJqrJrd7P9DJk5ejcoZLe1qZeB3htYr_vZS_6-AHRw2ywFacivgqQhmPw2QMQ7e8ZyHzx1waaSY2K7pe8YzvuzMtuw_W_D_f7HvRFYDqmXV0qSlVLc6umKYCFVkHmZKsU6fkpSbrvnCNQ9DCnAmzI7qVMVNwPhiErBUz52jCVDXZqcLn051njh8dTOLd-loqOLwIUraXMwi-U3q4hjQwVTyNfQu5tmxkwe7cauAlYXx874PLosPI5A0YhljOMRFyvOd2eDJ9SViDSOSEyOM9mHaIsL_Lj0tteGs_bBeF-zytD8Vaf5IsOi6uSghSCPIPSVJUOst10sIX0ZqlWaEclp-rHVgIybCCWWzSUY-CN3HWi7oHvgtV0ZtnddIARVbDlbEE6ZqyTNwwpbpeT2xdmT-g&isca=1",
    file:
      "https://00f74ba44b3b87421f124cdb7378bc477892137be0-apidata.googleusercontent.com/download/storage/v1/b/seirresume/o/Krishna_Neupaney_Resume_2021%20ama-page0002.jpeg?jk=AFshE3WTxBu1IUQYho5MvRN7Wg3XEQCtRnACHwcPCPswY0BiJYX83ZRHFRKC4PwKIR0HPoNyBONvNM8InWotsBMMx6H5pz-dpKBhT9NEtyKnAOcxtY6uX_CG1qsM7chJMcKvYdBt7HKZXW1SFCuCWUjK7E1K3Yolyk7XvtVY2moIuLZgf6EdyMjKJr3tdxVXpbgXP1AsI6-GWR4w1a6pDdP-i9TgCZNjGEWd9cVyvKB34EZTCmlU0mj6GeYsOKoBl0OZF3pq-rQQer4MFM8DfMoLYR5Dcz9IjDK5zmctojioLeCoBrKYnR_i5Rqa7Ps6wWBB7AxzX78bMK-qn7puMlJTbPanozM2Nnl5v24Gv3quSLyzD7agwYT9FONrakMqlxqDaKfZd5ydoVVuzcgm-Ri71BotZAycP7SEZQaluDCjXr0idUYrV8iOsUjzydMqW6wmQ3yaI06ZeHFwEtLF26B3vb5AQtPLU61h7yBBkh76JhkezE7qX9AJyoNde6SUf9hFamFu7fVtMwAfrEjtyRc78AZ746Otdc_HWyuTWv3JPEaDd99GhtLUnuIVOYJahkD5YdNkBxVEF3byJR2v6EMADQFJqrJrd7P9DJk5ejcoZLe1qZeB3htYr_vZS_6-AHRw2ywFacivgqQhmPw2QMQ7e8ZyHzx1waaSY2K7pe8YzvuzMtuw_W_D_f7HvRFYDqmXV0qSlVLc6umKYCFVkHmZKsU6fkpSbrvnCNQ9DCnAmzI7qVMVNwPhiErBUz52jCVDXZqcLn051njh8dTOLd-loqOLwIUraXMwi-U3q4hjQwVTyNfQu5tmxkwe7cauAlYXx874PLosPI5A0YhljOMRFyvOd2eDJ9SViDSOSEyOM9mHaIsL_Lj0tteGs_bBeF-zytD8Vaf5IsOi6uSghSCPIPSVJUOst10sIX0ZqlWaEclp-rHVgIybCCWWzSUY-CN3HWi7oHvgtV0ZtnddIARVbDlbEE6ZqyTNwwpbpeT2xdmT-g&isca=1" +
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
