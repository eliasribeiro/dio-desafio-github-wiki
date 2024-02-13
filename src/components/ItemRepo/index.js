import React from 'react'
import { ItemContainer } from './style';

export default function ItemRepo({ repo, onRemove }) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}
            </p>
            <div className='options'>
                <a href={repo.html_url} target='_blank' rel="noreferrer">Ver repositório</a>
                <a href="/#" onClick={onRemove} className='remover'>Remover</a>
            </div>

        </ItemContainer>
    )
}
