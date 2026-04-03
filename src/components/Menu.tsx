import { useState } from 'react'
import { MENU_BY_TAB, MENU_TABS, type MenuTabId } from '../menuData'

export function Menu() {
  const [active, setActive] = useState<MenuTabId>('tapas')
  const items = MENU_BY_TAB[active]

  return (
    <section id="carte" style={{ padding: '8rem 2rem', background: '#fafafa' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#888',
              marginBottom: '1rem',
            }}
          >
            Notre carte
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#0a0a0a',
              margin: '0 0 1rem',
            }}
          >
            Une cuisine sincère
          </h2>
          <p
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.85rem',
              fontWeight: 300,
              color: '#888',
              maxWidth: 500,
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            Produits frais, recettes du marché local, influences françaises et créoles. La carte évolue
            selon les saisons.
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 0,
            borderBottom: '1px solid #e0e0e0',
            marginBottom: '3rem',
            overflowX: 'auto',
          }}
        >
          {MENU_TABS.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #0a0a0a' : '2px solid transparent',
                  padding: '1rem 1.5rem',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: isActive ? 600 : 400,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: isActive ? '#0a0a0a' : '#999',
                  cursor: 'pointer',
                  transition: '0.2s',
                  whiteSpace: 'nowrap',
                  marginBottom: -1,
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
        <div>
          {items.map((item, index) => (
            <div
              key={`${active}-${item.name}-${index}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '1.5rem 0',
                borderBottom: index === items.length - 1 ? 'none' : '1px solid #ebebeb',
                gap: '2rem',
                animation: 'fadeIn 0.3s ease both',
              }}
            >
              <div style={{ flex: '1 1 0' }}>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.15rem',
                    fontWeight: 400,
                    color: '#0a0a0a',
                    margin: '0 0 0.4rem',
                  }}
                >
                  {item.name}
                </p>
                {item.description ? (
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.78rem',
                      fontWeight: 300,
                      color: '#888',
                      margin: 0,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
                  </p>
                ) : null}
              </div>
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.1rem',
                  fontWeight: 400,
                  color: '#0a0a0a',
                  whiteSpace: 'nowrap',
                  paddingTop: '0.1rem',
                }}
              >
                {item.price}
              </span>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.72rem',
            fontWeight: 300,
            color: '#bbb',
            fontStyle: 'italic',
            marginTop: '2rem',
            textAlign: 'center',
          }}
        >
          Carte non contractuelle — Produits locaux, prix sujets à modifications selon les saisons
        </p>
      </div>
    </section>
  )
}
