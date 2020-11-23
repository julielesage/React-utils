const SSkeletonLine = styled(SkeletonPulse)`
  width: 5.5em;
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;

export const SkeletonLine = () => (
  <SSkeletonLine />
);

// ::before permet d'hériter le style du parent notamment sa line height pour gérer les dimensions, on le remplit avec du vide \00a0
// aulieu de créer un reactangle, un rond, une ligne, ce petit bout de code prend les dimensions quelles qu'elles soient du parent.