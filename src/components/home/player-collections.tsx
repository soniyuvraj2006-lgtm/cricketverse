"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { playerCircleData } from "@/lib/data/player-circles";

function PlayerToken({ player, index }: { player: (typeof playerCircleData)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="group flex flex-col items-center"
    >
      <Link href={`/players/${player.slug}`} className="flex flex-col items-center gap-3">
        <div className="relative">
          <div
            className="absolute -inset-0.5 rounded-full opacity-80 group-hover:animate-[rotate-ring_2s_linear_infinite]"
            style={{
              background: "conic-gradient(var(--gold), transparent 30%, transparent 70%, var(--gold))",
            }}
          />
          <div className="relative flex h-[90px] w-[90px] flex-col items-center justify-center rounded-full border border-[var(--border-dim)] bg-raised transition-transform group-hover:scale-110 group-hover:shadow-[0_0_0_4px_rgba(200,168,75,0.15),0_0_20px_rgba(200,168,75,0.2)]">
            <span className="font-display text-[22px] text-gold">{player.initials}</span>
            <span className="font-mono text-[10px] text-muted">#{player.number}</span>
          </div>
        </div>
        <div className="text-center">
          <p className="font-body text-[13px] font-semibold text-primary transition-colors group-hover:text-gold">{player.name}</p>
          <p className="font-body text-xs text-muted">{player.jersey}</p>
          <p className="mt-1 translate-y-2 font-body text-xs text-gold opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            View Collection →
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function PlayerCollections() {
  const row1 = playerCircleData.slice(0, 5);
  const row2 = playerCircleData.slice(5);

  return (
    <section className="section-padding relative">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(15,31,23,0.4), transparent)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[var(--display-md)] text-primary"
        >
          SHOP BY LEGEND
        </motion.h2>
        <p className="mt-2 font-body text-secondary">Merchandise from your favorite cricket heroes</p>

        <div className="mt-12 space-y-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {row1.map((player, i) => (
              <PlayerToken key={player.slug} player={player} index={i} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:translate-x-8 md:gap-12">
            {row2.map((player, i) => (
              <PlayerToken key={player.slug} player={player} index={i + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
