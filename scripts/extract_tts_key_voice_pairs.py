import json
import os

INPUT_PATH = '/workspaces/support/_data/ttsLanguages.json'
OUTPUT_PATH = '/workspaces/support/_data/tts_key_voice_pairs.json'


def main():
    with open(INPUT_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    result = []
    for lang_key, voices in data.items():
        all_ids = []
        for voice_id, voice_val in voices.items():
            cropped_voice_id = voice_id.replace('Neural', '')

            def is_proper_name(s):
                return s and s[0].isupper() and s.isalpha()
            if isinstance(voice_val, dict):
                name = voice_val.get('name')
                if is_proper_name(name):
                    all_ids.append(name)
                variants = voice_val.get('variants')
                if variants and isinstance(variants, list):
                    all_ids.extend([v for v in variants if is_proper_name(v)])
            else:
                if is_proper_name(cropped_voice_id):
                    all_ids.append(cropped_voice_id)
        result.append([lang_key, ', '.join(all_ids)])
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        json.dump(result, f, indent=2)
    print(f'Extracted {len(result)} pairs to {OUTPUT_PATH}')


if __name__ == '__main__':
    main()
