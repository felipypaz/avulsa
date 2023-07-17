import * as S from "./styled";
import check from "./assets/check.svg";
import checkTwo from "./assets/checkTwo.svg";
import quesstion from "./assets/question.svg";
import not from "./assets/not.svg";
import quesstionTwo from './assets/questiontwo.svg'
function App() {
  return (
    <S.Container>
      <S.H1>Pronto para alcançar as estrelas?</S.H1>
      <S.H2>Escolha a opção ideal para a sua empresa</S.H2>
       <p className="More">Mais popular</p>   

      <div className="All">
        <div
          className="card1"
          style={{ color: "black", justifyContent: "space-evenly" }}
        >
          <S.H5>Procuração</S.H5>
          <div style={{ width: "75%" }}>
            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped ICMS/IPI:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped PIS/COFINS:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped ECD:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped ECF:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>
            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped REINF:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={not} alt="not" /> e-Social:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={not} alt="not" /> Acesso completo
                ao e-Cac:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={not} alt="not" /> XML NF-e:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={not} alt="not" /> XML NFC-e:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={not} alt="not" /> XML CT-e:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>
          </div>

          <button className="button1">seleciona</button>
        </div>
        <div className="teste">

          <div className="card" style={{ justifyContent: "space-evenly" }}>
            <S.H5>Certificado</S.H5>
            <div style={{ width: "75%" }}>
              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> Sped ICMS/IPI:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> Sped
                  PIS/COFINS:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> Sped ECD:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> Sped ECF:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>
              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> Sped REINF:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> e-Social:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> Acesso
                  completo ao e-Cac:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> XML NF-e:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> XML NFC-e:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>

              <S.P>
                <p>
                  <img className="img" src={check} alt="check" /> XML CT-e:
                </p>
                <img src={quesstion} alt="quesstion" />
              </S.P>
            </div>
            <button className="button2">seleciona</button>
          </div>
        </div>
        <div
          className="card2"
          style={{ color: "black", justifyContent: "space-evenly" }}
        >
          <S.H5>Documentos</S.H5>
          <div style={{ width: "75%" }}>
            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped ICMS/IPI:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped PIS/COFINS:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped ECD:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped ECF:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>
            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Sped REINF:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> e-Social:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> Acesso completo
                ao e-Cac:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> XML NF-e:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> XML NFC-e:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>

            <S.P>
              <p>
                <img className="img" src={checkTwo} alt="checkTwo" /> XML CT-e:
              </p>
              <img src={quesstionTwo} alt="quesstionTwo" />
            </S.P>
          </div>

          <button className="button1">seleciona</button>
        </div>
      </div>
    </S.Container>
  );
}

export default App;
