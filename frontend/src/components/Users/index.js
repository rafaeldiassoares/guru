import React from 'react'
import './index.css'

import { FiSearch } from "react-icons/fi";

import DeleteBtn from '../DeleteBtn';
import EditBtn from '../EditBtn';

const Users = () => {

    return (
        <div className='container Users'>
            <div className="row">
                <div className="col-10 col-sm-8">
                    <h2>Usuários</h2>
                </div>
                               

                <div className="col-2 col-sm-4">

                    <button type="button" className="btn float-end mt-3 Users-btn" data-bs-toggle="modal" data-bs-target="#modalNovoUsuario">Novo Usuário</button>

                    <div className="modal fade" id="modalNovoUsuario" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="modalNovoUsuarioLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">

                            <div className="modal-content">
                                <div className="modal-header border-0">
                                    <h5 className="modal-title" id="modalNovoUsuarioLabel">Novo Usuário</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="modal-body">

                                    <form>
                                        <div className="mb-3">
                                            <label for="nome" className="form-label">Nome:</label>
                                            <input type="text" className="form-control" id="nome" aria-describedby="nome" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="email" className="form-label">E-mail:</label>
                                            <input type="email" className="form-control" id="email" aria-describedby="email" />
                                        </div>

                                        <div className="mb-3">
                                            <label for="senha" className="form-label">Senha:</label>
                                            <input type="password" className="form-control" id="senha" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="confirma-senha" className="form-label">Confirmar Senha:</label>
                                            <input type="password" className="form-control" id="confirma-senha" />
                                        </div>
                                    </form>

                                </div>

                                <div className="modal-footer border-0">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-primary Users-btn">Salvar</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


                <div className="col-6 mb-4">
                    <div className="input-group">
                        <input className="form-control border-end-1 border" value="buscar" id="example-search-input" />
                        <span className="input-group-append">
                            <button className="btn bg-white border-start-0 border rounded-0 rounded-end" type="button">
                                <FiSearch />
                            </button>
                        </span>
                    </div>
                </div>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John</td>
                        <td>john@example.com</td>
                        <td>
                            <EditBtn />
                            <DeleteBtn />
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                        <td>
                            <EditBtn />
                            <DeleteBtn />
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                        <td>
                            <EditBtn />
                            <DeleteBtn />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="d-flex justify-content-center">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">Anterior</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active" aria-current="page">
                            <span className="page-link">2</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Próxima</a>
                        </li>
                    </ul>
                </nav>
            </div>    
        </div>
    );
}

export default Users;