import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import * as C from "./AppStyles";

import { FiSearch } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { HiOutlineStar } from "react-icons/hi";
import { VscRepoForked } from "react-icons/vsc";
import { BsEye } from "react-icons/bs";
import { CircularProgress } from "@mui/material";

import { api, token } from "./services/api";

const App = () => {
  const [input, setInput] = useState("");

  const [user, setUser] = useState({});
  const [userLoading, setUserLoading] = useState(false);

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    console.log(user, repositories);
  }, [user, repositories]);

  const handleSearchProfile = (e) => {
    e.preventDefault();
    setUser({});
    setUserLoading(true);

    api
      .get(`/${input}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => {
        toast.success("Perfil encontrado com sucesso!");
        setTimeout(() => {
          setUser(response.data);
        }, 500);

        api
          .get(`/${input}/repos`, {
            headers: {
              Authorization: `token ${token}`,
            },
          })
          .then((resp) => {
            setRepositories(resp.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        toast.error("Perfil não encontrado!");
        console.log(error);
      })
      .finally(() => {
        setInput("");
        setTimeout(() => {
          setUserLoading(false);
        }, 500);
      });
  };

  return (
    <C.Container>
      <C.Header>
        <h1>GitHub Explorer</h1>

        <C.Form onSubmit={handleSearchProfile}>
          <input
            type="search"
            placeholder="Buscar perfil..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus={true}
          />
          <button type="submit">
            <FiSearch strokeWidth={3} />
          </button>
        </C.Form>
      </C.Header>

      <C.Title>Seu buscador de perfis e repositórios...</C.Title>

      {userLoading && (
        <C.Title>
          <CircularProgress color="success" size={120} />
        </C.Title>
      )}

      {!userLoading && user.id && (
        <C.Main>
          <C.Avatar>
            <div className="avatar-container">
              <img src={user.avatar_url} alt={user.name} />
              <div className="avatar-border"></div>
            </div>

            <div className="avatar-username">
              <span>{user.name}</span>
              <span>{user.login}</span>
            </div>

            {user.bio && (
              <div className="biography">
                <span>{user.bio}</span>
              </div>
            )}

            <div className="followers-following">
              <div>
                Seguidores: <span>{user.followers}</span>
              </div>
              <div>
                Seguindo: <span>{user.following}</span>
              </div>
            </div>

            <a href={user.html_url} target="_blank" rel="noreferrer">
              Perfil <BsArrowRight />
            </a>
          </C.Avatar>

          <C.RepositoriesContainer>
            {repositories.length !== 0 ? (
              <ul>
                {repositories.map((repo) => (
                  <C.Repository key={repo.id}>
                    <h3>
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        {repo.name}
                      </a>
                    </h3>

                    <div>
                      <span>
                        <HiOutlineStar /> {repo.stargazers_count}
                      </span>
                      <span>
                        <VscRepoForked /> {repo.forks_count}
                      </span>
                      <span>
                        <BsEye /> {repo.watchers_count}
                      </span>
                    </div>
                  </C.Repository>
                ))}
              </ul>
            ) : (
              <h3>Perfil sem repositórios.</h3>
            )}
          </C.RepositoriesContainer>
        </C.Main>
      )}
    </C.Container>
  );
};

export default App;
