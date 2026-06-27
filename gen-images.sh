#!/bin/bash
# Generate images in batches of 3 (parallel within batch, sequential across batches)
cd /home/z/my-project
> img-gen-detail.log

gen() {
  local file="$1" size="$2" prompt="$3"
  local path="public/images/$file"
  if [ -f "$path" ] && [ $(stat -c%s "$path" 2>/dev/null) -gt 8000 ]; then
    echo "[SKIP] $file"
    return 0
  fi
  for attempt in 1 2 3; do
    if z-ai image -p "$prompt" -o "./$path" -s "$size" >> img-gen-detail.log 2>&1; then
      echo "[OK]   $file"
      return 0
    fi
    sleep 5
  done
  echo "[ERR]  $file"
  return 1
}
export -f gen

# Batch 1: hero + about + cta
echo "=== BATCH 1 ==="
gen "hero-worker.png" "864x1152" "Professional male construction worker wearing yellow hard hat and safety vest, confident pose arms crossed, construction site background with tower crane and steel framework, golden hour lighting, cinematic, photorealistic, high quality" &
gen "about-site.png" "1344x768" "Construction site aerial view at sunset, tower cranes, excavators, building steel framework, dramatic golden lighting, cinematic wide angle, photorealistic" &
gen "cta-bg.png" "1344x768" "Construction team meeting on site reviewing blueprints, diverse workers in hard hats and safety vests, professional, collaborative, golden hour, photorealistic" &
wait

# Batch 2: projects 1-3
echo "=== BATCH 2 ==="
gen "projects/project-1.png" "1024x1024" "Modern glass skyscraper under construction, steel frame, blue sky, tower crane, architectural photography, high quality" &
gen "projects/project-2.png" "1024x1024" "Luxury modern residential house exterior, contemporary architecture, large glass windows, landscaped garden, sunset, photorealistic" &
gen "projects/project-3.png" "1024x1024" "Highway bridge construction with concrete pillars, infrastructure project, aerial view, dramatic sky, photorealistic" &
wait

# Batch 3: projects 4-6
echo "=== BATCH 3 ==="
gen "projects/project-4.png" "1024x1024" "Modern commercial office building facade, glass and steel, downtown, professional architecture photography, blue sky" &
gen "projects/project-5.png" "1024x1024" "Industrial warehouse construction interior, exposed steel structure, large space, industrial photography, dramatic lighting" &
gen "projects/project-6.png" "1024x1024" "Renovated luxury apartment interior, modern living room, hardwood floors, large windows, designer furniture, interior design photography" &
wait

# Batch 4: team 1-3
echo "=== BATCH 4 ==="
gen "team/team-1.png" "864x1152" "Professional male construction engineer portrait, yellow hard hat, safety vest, confident smile, neutral studio background, corporate headshot, high quality" &
gen "team/team-2.png" "864x1152" "Professional female architect portrait, business casual blazer, confident, neutral office background, corporate headshot, high quality" &
gen "team/team-3.png" "864x1152" "Professional male construction site manager portrait, white safety helmet, orange vest, confident, neutral background, corporate headshot" &
wait

# Batch 5: team 4-6
echo "=== BATCH 5 ==="
gen "team/team-4.png" "864x1152" "Professional female civil engineer portrait, white hard hat, safety vest, confident smile, construction background, corporate headshot" &
gen "team/team-5.png" "864x1152" "Professional male construction foreman portrait, yellow hard hat, plaid shirt, confident, neutral background, corporate headshot" &
wait
# team-6 already exists, skip

# Batch 6: blog 1,4
echo "=== BATCH 6 ==="
gen "blog/blog-1.png" "1344x768" "Modern sustainable building construction with solar panels, green architecture, blue sky, photorealistic" &
gen "blog/blog-4.png" "1344x768" "Construction safety equipment flat lay, yellow hard hats, gloves, goggles, organized on wooden table, industrial, photorealistic" &
wait

echo ""
echo "=== ALL DONE ==="
find public/images -name "*.png" | sort
